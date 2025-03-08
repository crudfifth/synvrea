class NavigationEffect {
  constructor(navigation) {
    this.tl = gsap.timeline();
    this.previous = null;
    this.current = null;
    this.navigation = navigation;
    this.anchors = this.navigation.querySelectorAll("a");
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^";

    this.anchors.forEach((anchor) => {
      const cachedText = anchor.querySelector("span").innerText;
      anchor.addEventListener("mouseenter", (e) => {});

      anchor.addEventListener("click", (e) => {
        this.handlePrevious();
        this.handleCurrent(anchor);
      });
    });
  }

  handleCurrent(current) {
    this.current = current;
    this.current.classList.toggle("active");
    const nodes = this.getNodes(this.current);

    gsap.to(nodes[0], {
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      attr: {
        x: "0%"
      },
      overwrite: true,
      stagger: 0.012
    });

    gsap.to(nodes[1], {
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      attr: {
        x: "0%"
      },
      stagger: 0.012,
      overwrite: true,
      delay: 0.1
    });

    gsap.fromTo(
      nodes[0], {
        fill: "#ff6bd3"
      }, {
        fill: "#05eafa",
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
        repeat: -1
      }
    );
  }

  handlePrevious() {
    this.previous = document.querySelector(".active");
    if (this.previous) {
      this.previous.classList.toggle("active");
      const nodes = this.getNodes(this.previous);
      gsap.to(nodes[0], {
        duration: 0.2,
        ease: "power1.out",
        attr: {
          x: "-101%"
        },
        overwrite: true
      });

      gsap.to(nodes[1], {
        duration: 0.2,
        ease: "power1.out",
        attr: {
          x: "-101%"
        },
        overwrite: true,
        delay: 0.02
      });
    }
  }

  getNodes(item) {
    return [
      gsap.utils.shuffle(gsap.utils.selector(item)(".blue rect")),
      gsap.utils.shuffle(gsap.utils.selector(item)(".pink rect"))
    ];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NavigationEffect(document.querySelector("nav"));
});