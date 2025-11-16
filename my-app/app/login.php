<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Đọc dữ liệu JSON từ request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Lấy email và password từ dữ liệu JSON
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Kiểm tra đăng nhập (ví dụ đơn giản)
// Bạn có thể thay thế bằng logic kiểm tra database thực tế
$success = false;
$message = 'Login failed';

if ($email && $password) {
    // Ví dụ: kiểm tra với email và password cố định
    // Trong thực tế, bạn nên kiểm tra với database
    if ($email === 'admin@example.com' && $password === 'password123') {
        $success = true;
        $message = 'Login successful';
    }
}

// Trả về kết quả dưới dạng JSON
echo json_encode([
    'success' => $success,
    'message' => $message
]);
?>