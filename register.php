<?php
include('db.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true); 

    $name = $data['name'] ?? null;
    $email = $data['email'] ?? null;
    $password = $data['password'] ?? null;

    if (!$name || !$email || !$password) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashedPassword')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(['success' => true, 'message' => 'Registration successful']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error during registration: ' . mysqli_error($conn)]);
    }
}
?>
