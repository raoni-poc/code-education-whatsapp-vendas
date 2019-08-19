<?php
$header = [
    'alg' => 'HS256', //HMAC -SHA 256
    'typ' => 'JWT'
];
$header_json = json_encode($header);
$header_base64 = base64_encode($header_json);

///

$payload = [
    'firt_name' => 'Luiz',
    'last_name' => 'Diniz',
    'email' => 'argentinaluiz@gmail.com',
];

$payload_json = json_encode($payload);
$payload_base64 = base64_encode($payload_json);

///

$key = 'juju74bnk7q2c54v8092jklx03';
$signature = hash_hmac('sha256', $header_base64.$payload_base64, $key, true);
$signature_base64 = base64_encode($signature);

///

$token = "$header_base64.$payload_base64.$signature_base64";