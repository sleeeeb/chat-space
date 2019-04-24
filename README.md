## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique: true,index:true|

### Association
-   has_many  :members
-   has_many  :groups, through: :members
-   has_many  :messages


##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false|


### Association
-   has_many  :members
-   has_many  :users, through: :members
-   has_many  :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### index
add_index  :user_id,:group_id

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

text_typeを使ってテキストの分類をしてメッセージとイメージを一つのカラムで管理しようとしています
### Association
- belongs_to :group
- belongs_to :user
