# Thiệp kỷ niệm online – Tiểu công chúa Meo Meo 💗

## 1. Cấu trúc
- `index.html`: nội dung và các phần của thiệp.
- `style.css`: màu sắc, bố cục, hiệu ứng và responsive.
- `script.js`: mở phong thư, nhạc, trái tim bay, thông điệp bí mật.
- `assets/images/`: ảnh cá nhân.
- `assets/music/`: nhạc nền.

## 2. Thay ảnh cá nhân
Chép ảnh của hai bạn vào `assets/images/`, đặt tên:
- `our-photo.jpg` (ảnh lớn đầu trang)
- `memory-1.jpg`
- `memory-2.jpg`
- `memory-3.jpg`

Nếu ảnh của bạn là PNG, hãy đổi phần mở rộng trong đường dẫn ở `index.html` cho đúng. Dùng ảnh bạn có quyền chia sẻ.

## 3. Thêm nhạc
Chép file MP3 vào `assets/music/our-song.mp3`. Nhạc chỉ phát sau khi người xem bấm nút “Bật nhạc”, vì trình duyệt thường chặn tự phát âm thanh.

## 4. Sửa nội dung
Mở `index.html` bằng VS Code, tìm các đoạn chữ như `Tiểu công chúa Meo Meo`, `Gửi em` hoặc nội dung trong phần `loveLetter`, rồi thay bằng lời của bạn. Đổi tên trang ở thẻ `<title>` nếu muốn.

## 5. Chạy thử trên máy
Mở thư mục trong VS Code. Nếu đã cài tiện ích Live Server, bấm chuột phải `index.html` → **Open with Live Server**. Nếu chưa có, mở `index.html` trực tiếp bằng Chrome/Edge. Thử cả màn hình điện thoại (có thể dùng công cụ thiết bị trong DevTools).

## 6. Đăng lên GitHub Pages
1. Tạo repository GitHub mới, ví dụ `thiep-meo-meo`.
2. Đưa `index.html`, `style.css`, `script.js`, thư mục `assets` và file README này lên repository.
3. Mở repository → **Settings** → **Pages**.
4. Ở phần Build and deployment, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/(root)`, rồi bấm **Save**.
6. Chờ workflow hoàn tất; GitHub sẽ cung cấp link dạng `https://TEN-GITHUB.github.io/thiep-meo-meo/`.
7. Mở link trên điện thoại để kiểm tra. Khi chỉnh sửa, commit/push các file mới; link không đổi.

## 7. Lưu ý quyền riêng tư
Ai có link đều có thể xem website công khai. Đừng đưa thông tin nhạy cảm, địa chỉ nhà, số điện thoại hay ảnh riêng tư mà người trong ảnh chưa đồng ý chia sẻ. GitHub Pages là website tĩnh; nội dung người nhận nhìn thấy nằm trong các file công khai.
