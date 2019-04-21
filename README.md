## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false|
|email|string|null: false , unique: true|
|password|string|null: false|

### Association
-   has_many  :groups, through: :members
-   has_many  :messages

### index
add_index  :name

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false,|


### Association
-   has_many  :users, through: :members
-   has_many  :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### index
add_index  :user_id,:group_id

## messagesテーブル

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

### index
add_index  :text,:text_type,:created_at,:user_id,:group_id
