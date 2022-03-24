package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"shared"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type StudentData struct {

}

type Student shared.Resource[StudentData]

func main() {
	endpoint := "mongodb://localhost:27017"

	ctx, cancelDbCtx := context.WithTimeout(context.Background(), 30 * time.Second)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(endpoint))
	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	defer (func() {
		cancelDbCtx()
		if err := client.Disconnect(context.Background()); err != nil {
			log.Fatalf("Error disconnecting from database: %v", err)
		}
	})()

	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatalf("Error pinging db: %v", err)
	}

	fmt.Println("connected")
}
