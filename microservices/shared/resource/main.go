package resource

import (
	"encoding/json"
	"fmt"
	"time"
)

type Visibility int
const (
	Live Visibility = iota
	Draft
	Archived
	Deleted
)

type ResourceMeta struct {
	Created time.Time `json:"created"`
	Edited time.Time `json:"edited"`
	Visibility Visibility `json:"visibility"`
}

func (meta *ResourceMeta) MarshalJSON() ([]byte, error) {
	type Alias ResourceMeta
	return json.Marshal(&struct {
		*Alias
		Created int64 `json:"created"`
		Edited int64 `json:"edited"`
	} {
		Alias: (*Alias)(meta),
		Created: meta.Created.Unix(),
		Edited: meta.Created.Unix(),
	})
}

func (meta *ResourceMeta) UnmarshalJSON(data []byte) error {
	fmt.Println(string(data))
	type Alias ResourceMeta
	aux := &struct {
		*Alias
		Created int64 `json:"created"`
		Edited int64 `json:"edited"`
	} {
		Alias: (*Alias)(meta),
	}

	err := json.Unmarshal(data, &aux)
	if err != nil {
		return err
	}

	meta.Created = time.Unix(aux.Created, 0)
	meta.Edited = time.Unix(aux.Edited, 0)
	return nil
}

type Resource[T any] struct {
	Meta ResourceMeta `json:"meta"`
	Data T `json:"data"`
}