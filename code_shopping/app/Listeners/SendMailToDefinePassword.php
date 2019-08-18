<?php

namespace CodeShopping\Listeners;

use CodeShopping\Events\UserCreatedEvent;

class SendMailToDefinePassword
{
    public function __construct()
    {
        //
    }

    public function handle(UserCreatedEvent $event): void
    {
        $user = $event->getUser();
        $token = \Password::broker()->createToken($user);
        $user->sendPasswordResetNotification($token);
        //$user->notify(new Notification($token));
    }
}
