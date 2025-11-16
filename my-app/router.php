<?php
// Router cho PHP built-in server
$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);

// Loại bỏ query string và chỉ lấy path
$path = ltrim($requestPath, '/');

// Nếu path bắt đầu với 'app/', redirect đến file trong thư mục app
if (strpos($path, 'app/') === 0) {
    $filePath = __DIR__ . '/' . $path;
    if (file_exists($filePath) && is_file($filePath)) {
        return include $filePath;
    }
}

// Nếu không tìm thấy file, trả về 404
http_response_code(404);
header('Content-Type: application/json');
echo json_encode(['error' => 'Not found', 'path' => $path]);
?>

