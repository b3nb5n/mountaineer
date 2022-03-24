package main

import (
	"encoding/json"
	"log"
	"os"

	"shared"

	f "github.com/fauna/faunadb-go/v4/faunadb"
	"github.com/gofiber/fiber/v2"
)

type StudentData struct {

}

type Student shared.Resource[StudentData]

var (
	secret = os.Getenv("FAUNADB_SECRET")
	endpoint = os.Getenv("FAUNADB_ENDPOINT")
)

func main() {
	if secret == "" {
		log.Fatalln("Missing database secret")
	} else if endpoint == "" {
		endpoint = "https://db.fauna.com/"
		// log.Fatalln("Missing database endpoint")
	}

	client := f.NewFaunaClient(secret, f.Endpoint(endpoint))

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		result, err := client.Query(f.Get(f.Ref(f.Collection("students"))))
		if err != nil {
			return c.SendString("Error querying db" + err.Error())
		}

		var student Student
		err = result.Get(&student)
		if err != nil {
			return c.SendString("Error getting" + err.Error())
		}

		data, err := json.Marshal(student)
		if err != nil {
			return c.SendString(err.Error())
		}

		return c.SendString(string(data))
	})

	app.Listen(":3000")
}
