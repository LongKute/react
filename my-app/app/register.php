<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Đọc dữ liệu JSON từ request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Lấy dữ liệu từ request
$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';
$confirmPassword = $data['confirmPassword'] ?? '';

// Khởi tạo response
$success = false;
$message = '';

// Validation
if (empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Email is required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

if (empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Password is required']);
    exit;
}

if (strlen($password) < 6) {
    echo json_encode(['success' => false, 'message' => 'Password must be at least 6 characters long']);
    exit;
}

if ($password !== $confirmPassword) {
    echo json_encode(['success' => false, 'message' => 'Password and confirm password do not match']);
    exit;
}

// Nếu tất cả validation đều pass
// Trong thực tế, bạn nên:
// 1. Kiểm tra email đã tồn tại chưa trong database
// 2. Hash password: $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
// 3. Lưu vào database

// Ví dụ đơn giản (không lưu database):
$success = true;
$message = 'Registration successful! You can now sign in.';

// Trả về kết quả
echo json_encode([
    'success' => $success,
    'message' => $message
]);
?>