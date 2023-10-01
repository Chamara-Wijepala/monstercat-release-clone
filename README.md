# Monstercat album release page clone

The idea for this project came from [Frontend Practice](https://www.frontendpractice.com/projects/monstercat). I decided to build this project to practice my skills with SCSS.

## Links

- [Live demo](https://monstercat-release-page-clone.onrender.com/)

- [Original site](https://www.monstercat.com/release/MCLP017)

Note - This project was built on late September 2023, the design of the original site may have changed since then.

## What I learned

```css
.side-nav {
	width: 420px;
	max-width: 100%;
}
```

- Setting a fixed width and a max width of 100% on an element allows it to shrink to fit smaller screens and grow to it's desired width.

---

```css
.background-poster {
	filter: blur(5px) brightness(38%);

	-webkit-mask-image: linear-gradient(180deg, black 50%, transparent 100%);
	mask-image: linear-gradient(180deg, black 50%, transparent 100%);
}
```

- Using the filter property to blur and adjust the brightness of images

- Using the mask-image property to create a fade effect on an image

---

```css
.navbar-container {
	backdrop-filter: blur(10px);
}
```

- Blurring the background image under an element

---

```css
.hero-title h2 {
	-webkit-text-stroke: 1px $clr-primary-200;
	-webkit-text-fill-color: transparent;
}
```

- Adding text decorations with text-stroke and text-fill

---

```css
.play-icon,
.share-icon {
	background-color: $clr-primary-100;
	-webkit-mask-size: contain;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;
}

&:hover {
	.play-icon,
	.share-icon {
		background-color: $clr-primary-900;
	}
}

.play-icon {
	-webkit-mask-image: url('../../assets/icons/play-solid.svg');
	mask-image: url('../../assets/icons/play-solid.svg');
}
.share-icon {
	-webkit-mask-image: url('../../assets/icons/share-nodes-solid.svg');
	mask-image: url('../../assets/icons/share-nodes-solid.svg');
}
```

- Creating fake icons using svg and applying hover effects to them by changing background color

---

- Changing the direction of text using the writing-mode property

- Prevent word wrapping with white-space: nowrap;

- Embedding youtube videos

## Credits

- This [video](https://www.youtube.com/watch?v=FCuNtCq3nRg&t=318s&pp=ygUXa2V2aW4gcG93ZWxsIG1hc2sgaW1hZ2U%3D) on how to use mask-image

- This [article](https://css-tricks.com/change-color-of-svg-on-hover/) helped a lot to add hover effects to the svg icons
