defmodule LivebookProto.OrgUpdated do
  use Protobuf, protoc_gen_elixir_version: "0.13.0", syntax: :proto3

  field :id, 1, type: :string
  field :trial_ends_at, 2, type: :int64, json_name: "trialEndsAt"
  field :cancel_at, 3, type: :int64, json_name: "cancelAt"
end
