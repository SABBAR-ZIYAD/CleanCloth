<?php
include('db.php');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true); 

    $email = $data['email'] ?? null;
    $password = $data['password'] ?? null;

    if (!$email || !$password) {
        echo json_encode(['success' => false, 'message' => 'Both fields are required.']);
        exit;
    }

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);

    if ($user && password_verify($password, $user['password'])) {
        unset($user['password']); 
        echo json_encode(['success' => true, 'message' => 'Login successful', 'user' => $user]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid login credentials.']);
    }
}
?>
