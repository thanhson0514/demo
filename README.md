# demo
## Component ContentContainer
### Các chức năng chính:
- 1 hàm getData xử lý data trên firebase với các trường: title, owner, ownerString, cover, totalRespect.
- props có thuộc tính data (array): lưu các id của documents.
- state có 2 thuộc tính: topics và loading:
  + topics (array): lưu các object các trường title, owner, ownerString, cover, totalRespect.
  + loading (boolean): kiểm tra dữ liệu trước khi load component.

### Về style:
- Chia bố cục theo flex.
- chưa viết responsive :))
