<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/{animal}', name: 'app_default')]
    public function index(string $animal = '🐑'): Response
    {
        return $this->render('default/index.html.twig', [
            'animal' => $animal,
        ]);
    }
}
