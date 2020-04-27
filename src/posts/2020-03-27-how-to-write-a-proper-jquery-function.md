---
title: "How to write a proper jQuery function"
date: "2020-03-27"
tags: ["javascript", "jQuery"]
---

At the beggining of my career as a web developer one of my co-workers showed me a great way to deal with jQuery functions. It was a game changer for a newbie like me. Before that I was just writing things with hope that everything will somehow work out and I didn't even consider what could happen if circumstances were different than the ones I was prepared for.

Before we start I would like to make sure that we share the same initial preparations. I assume that jQuery is available in your environment, and you have a file with your javascript content already created.

```javascript
    // main.js
    (function($){

    })(jQuery);
```

First, we wrap the code like this to make sure that `$` is treated as `jQuery` inside that closure.

```javascript
    // main.js
    (function($){
        $.fn.toggleMenu = function() {

        }
    })(jQuery);
```

Then, we create empty function inside. `$.fn` allows you to extend jQuery with your own functions.

```javascript
    // main.js
    (function($){
        $.fn.toggleClass = function() {
            var $el;
            var init = function() {

            }
        }
    })(jQuery);
```

We declare `$el` on which we will later initiate our function. `init` is a place where we will take care of all functionality we want to implement.

```javascript
    // main.js
    (function($){
        $.fn.toggleClass = function() {
            var $el;
            var init = function() {

            }

            if (this.length > 0) {
                if (this.length > 1) {
                    this.each(function() {
                        $(this).toggleMenu();
                    });
                } else {
                    $el = this;
                    init();
                }
            }
        }
    })(jQuery);
```

And here goes the most important part of our work. `if (this.length > 0)` checks if function was called at least once. `if (this.length > 1)` then we check whether the function has been called more than once. Let's consider the `else` case first. We name our `this` as `$el`, and run `init` function where all the magic happpens. But what if function `toggleMenu` is called twice, triple or even fourfold? For each call, our function falls into 'else' creating many independent instances.

```javascript
    // main.js
    (function($){
        $.fn.toggleClass = function() {
            var $el;
            var $button;
            var init = function() {
                $button = $el.find('button');
                $button.on('click', function(e) {
                    e.preventDefault();
                    $el.toggleClass('toggled');
                })
            }

            if (this.length > 0) {
                if (this.length > 1) {
                    this.each(function() {
                        $(this).toggleMenu();
                    });
                } else {
                    $el = this;
                    init();
                }
            }
        }
    })(jQuery);
```

We created a really simple function that toggles class when button is clicked. Now all we have to do is call it when our document is ready.

```javascript
    // main.js
    (function($){
        $(document).on('ready', function() {
            $(#element).toggleClass();
        });

        $.fn.toggleClass = function() {
            var $el;
            var $button;
            var init = function() {
                $button = $el.find('button');
                $button.on('click', function(e) {
                    e.preventDefault();
                    $el.toggleClass('toggled');
                })
            }

            if (this.length > 0) {
                if (this.length > 1) {
                    this.each(function() {
                        $(this).toggleMenu();
                    });
                } else {
                    $el = this;
                    init();
                }
            }
        }
    })(jQuery);
```

Voilà! As you can see, creating function this way makes it really transparent and keeps your javascript file tidy. With this solution you can call the function as many times as you want, and each of the calls will be completely independent.

Hopefully the concept was presented in a simple manner. It will probably take a while before I'll implement comments on my website, so if anyone have any questions - I will gladly answer them. You can find me at [hello@michalkotowski.pl](mailto:hello@michalkotowski.pl).