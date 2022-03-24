package resource

import "time"

type Visibility int
const (
	Live Visibility = iota
	Draft
	Archived
	Deleted
)

type ResourceMeta struct {
	CreatedTime time.Time `json:"createdAt"`
	EditedTime time.Time `json:"lastEdited"`
	Visibility Visibility `json:"visibility"`
}

type Resource[T any] struct {
	Meta ResourceMeta `json:"meta"`
	Data T `json:"data"`
}