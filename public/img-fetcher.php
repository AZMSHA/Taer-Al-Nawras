<?php
$paths = $_POST['paths'];
$imageUrls = [];

foreach ($paths as $path) {
    $dir = $path;
    $images = glob($dir . "*.{jpg,png,jpeg,webp}", GLOB_BRACE);
    $dirUrls = array_map(function($image) {
        return $dir . basename($image);
    }, $images);
    $imageUrls = array_merge($imageUrls, $dirUrls);
}

header('Content-Type: application/json');
echo json_encode($imageUrls);
?>
