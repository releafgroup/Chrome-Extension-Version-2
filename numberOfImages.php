<?php
/**
     * filename: numberOfImages.php
     */

    $dir        = "/home/content/52/9018552/html/ahan/images";
    $fi         = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);
    $fileCount  = iterator_count($fi);

    echo $fileCount;

?>
