<?php

/**
 * Class Songs
 * This is a demo Model class.
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */

namespace Mini\Model;


class Hallo
{
    /**
     * Get all songs from database
     */
    private $hallo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat quam quis lacus malesuada faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dictum felis lectus, in auctor turpis fringilla quis. Pellentesque ac mi ut nunc convallis luctus non vel purus. Mauris laoreet dolor mattis metus bibendum, id lacinia orci elementum. Proin sit amet facilisis mauris. In pharetra tincidunt mauris non dapibus. Nam augue nunc, consectetur ut convallis tincidunt, eleifend ac sapien. Etiam sollicitudin nec dui in fringilla. Suspendisse malesuada turpis sed lacus dictum dignissim. Sed vitae quam euismod, sagittis nulla vel, ornare sem.";
    
    public function getHallo()
    {


        return $this->hallo;
    }
}
