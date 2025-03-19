<?php
include('db.php');

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0); 
}


$conn = new mysqli("localhost", "root", "", "smart_laundry_db");

if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Database connection failed."]));
}

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data["userId"];
$userName = $data["userName"];
$items = $data["items"];
$bookingDate = $data["bookingDate"];

foreach ($items as $item) {
    $stmt = $conn->prepare("INSERT INTO bookings (user_id, user_name, item_type, service, description, booking_date) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isssss", $userId, $userName, $item["type"], $item["service"], $item["description"], $bookingDate);

    if (!$stmt->execute()) {
        echo json_encode(["success" => false, "error" => $stmt->error]);
        $stmt->close();
        $conn->close();
        exit;
    }
    $stmt->close();
}

echo json_encode(["success" => true]);
$conn->close();
?>
