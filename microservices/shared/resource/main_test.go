package resource

import (
	"encoding/json"
	"fmt"
	"testing"
	"time"
)

func Fuzz_ResourceMeta_MarshalJSON(f *testing.F) {
	f.Add(time.Now().Unix())

	f.Fuzz(func(t *testing.T, created int64) {
		meta := ResourceMeta { Created: time.Unix(created, 0) }

		data, err := json.Marshal(&meta)
		if err != nil {
			t.Errorf("Error marshaling json: %v", err)
			return
		}

		result := make(map[string]interface{})
		err = json.Unmarshal(data, &result)
		if err != nil {
			t.Errorf("Error unmarshaling json: %v", err)
			return
		}

		if _, ok := result["created"]; !ok {
			t.Error("Result has no property 'created'")
			return
		}

		if _created, ok := result["created"].(float64); ok {
			if int64(_created) != created {
				t.Errorf("Result property 'created' does not equal expected value: %v", created)
				return
			}

			return
		}

		t.Error("Type of result property 'created' is not assignable to int64")
	})
}

func Fuzz_ResourceMeta_UnmarshalJSON(f *testing.F) {
	f.Add(time.Now().Unix())

	f.Fuzz(func(t *testing.T, created int64) {
		data := []byte(fmt.Sprintf("{\"created\":%v,\"edited\":0,\"visibility\":0}", created))
		var meta ResourceMeta
		err := json.Unmarshal(data, &meta)
		if err != nil {
			t.Errorf("Error unmarshaling json: %v", err)
			return
		}

		if meta.Created.Unix() != created {
			t.Errorf("Result property 'created' does not represent given value: %v", created)
			return
		}
	})
}