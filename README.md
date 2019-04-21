## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false|
|email|string|null: false , unique: true|
|password|string|null: false|

### Association
-   has_many  :groups
-   has_many  :messages

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false,|


### Association
-   has_many  :users
-   has_many  :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|text|text|null: false|
|text_type|integer|null: false|
|created_at|datetime|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

text_typeを使ってテキストの分類をしてメッセージとイメージを一つのカラムで管理しようとしています
### Association
- belongs_to :group
- belongs_to :user
