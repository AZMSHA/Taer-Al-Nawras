<?php
$dir = "/path/to/your/images";
$images = glob($dir . "*.{jpg,png,gif}", GLOB_BRACE);
$imageUrls = array_map(function($image) {
    return "http://your-server.com/images/" . basename($image);
}, $images);
header('Content-Type: application/json');
echo json_encode($imageUrls);
?>