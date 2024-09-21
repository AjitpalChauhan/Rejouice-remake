gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();







function cursorEffect(){
  var page1Content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })

})


page1Content.addEventListener("mouseenter", function(dets){
  gsap.to(cursor,{
    scale: 1,
    opacity:1
  })
}
)
page1Content.addEventListener("mouseleave", function(dets){
  gsap.to(cursor,{
    scale: 0,
    opacity:0
  })
})
}

function cursorEffect2(){
let page5Body = document.querySelector('.page5');
let cursor = document.querySelector(".cursor2")

page5Body.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    x: dets.x,
    y:dets.y
  })
})
page5Body.addEventListener("mouseenter", function(dets){
  gsap.to(cursor,{
    scale: 1,
    opacity:1
  })
}
)
page5Body.addEventListener("mouseleave", function(dets){
  gsap.to(cursor,{
    scale: 0,
    opacity:0
  })
})
}

cursorEffect();
cursorEffect2();


function page2Animation() {
  gsap.from(".page2Content h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2", // Make sure this is the element where the animation should trigger
      scroller: ".main", // Use ".main" as the scroller since Locomotive Scroll is controlling it
      start: "top 20%", // Adjust the start position, "top 80%" works for triggering earlier
      end: "top 30%",   // Adjust the end position for when to stop the animation
      scrub: 2, // Makes the animation smooth and tied to the scroll position
      invalidateOnRefresh: true, // Refresh ScrollTrigger on resize to prevent layout shifts
      markers: false // You can enable markers for debugging purposes, set to false to hide them
    }
  });
}

function page4Animation() {
  gsap.from(".page4Content h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4", // Make sure this is the element where the animation should trigger
      scroller: ".main", // Use ".main" as the scroller since Locomotive Scroll is controlling it
      start: "top 20%", // Adjust the start position, "top 80%" works for triggering earlier
      end: "top 30%",   // Adjust the end position for when to stop the animation
      scrub: 2, // Makes the animation smooth and tied to the scroll position
      invalidateOnRefresh: true, // Refresh ScrollTrigger on resize to prevent layout shifts
      markers: false // You can enable markers for debugging purposes, set to false to hide them
    }
  });
}

function page6Animation() {
  gsap.from(".page6Content h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page6", // Make sure this is the element where the animation should trigger
      scroller: ".main", // Use ".main" as the scroller since Locomotive Scroll is controlling it
      start: "top 20%", // Adjust the start position, "top 80%" works for triggering earlier
      end: "top 30%",   // Adjust the end position for when to stop the animation
      scrub: 2, // Makes the animation smooth and tied to the scroll position
      invalidateOnRefresh: true, // Refresh ScrollTrigger on resize to prevent layout shifts
      markers: false // You can enable markers for debugging purposes, set to false to hide them
    }
  });
}

page2Animation();
page4Animation();
page6Animation();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true
  }
});

var tl = gsap.timeline()

tl.from(".loader h3", {
  x:40,
  duration: 1,
  opacity: 0,
  stagger: 0.1
})

tl.to(".loader h3", {
  // x: -40,
  duration: 1,
  delay: 1,
  opacity: 0,
  // stagger: 0.1
})

tl.to(".loader", {
  opacity:0,
  duration: 1
})
tl.from(".page1-content h1 span", {
  y:100,
  opacity:0,
  stagger:0.1
})
tl.to(".loader", {
  display: "none"
})
