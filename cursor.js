document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".cursor-wrapper"),
        t = document.querySelector(".cursor"),
        n = document.querySelector(".inner-cursor"),
        r = document.querySelector(".default-cursor");
    if (!n)
        return void console.error("Inner cursor element not found");
    if ("ontouchstart" in window || navigator.maxTouchPoints)
        return;
    function o(e) {
        const o = e,
            s = (a = e, l = .2, `rgba(${parseInt(a.slice(1, 3), 16)}, ${parseInt(a.slice(3, 5), 16)}, ${parseInt(a.slice(5, 7), 16)}, ${l})`);
        var a,
            l;
        t.style.borderColor = o,
        t.style.backgroundColor = s,
        n.style.backgroundColor = e,
        r.style.backgroundColor = e
    }
    function s() {
        const e = window.location.href,
            s = document.querySelector(".tech_description-container.is-flexiweave.is-active"),
            a = document.querySelector(".tech_description-container.is-thermoflux.is-active"),
            l = document.querySelector(".tech_description-container.is-quakeshift.is-active");
        s ? o("#877FCB") : a ? o("#FDFDCE") : l ? o("#6BE688") : e.includes("ember") ? o("#FDFDCE") : e.includes("nebula") ? o("#877FCB") : (t.style.borderColor = "", t.style.backgroundColor = "", n.style.backgroundColor = "", r.style.backgroundColor = "")
    }
    e.style.display = "block",
    t.style.display = "block",
    n.style.display = "block",
    r.style.display = "block";
    let a = !1;
    document.addEventListener("mousedown", (function(e) {
        a = !0,
        t.classList.add("clicking"),
        n.classList.add("clicking"),
        n.style.transform = "translate(-50%, -50%) rotate(225deg)"
    }), !0),
    document.addEventListener("mouseup", (function(e) {
        a = !1,
        t.classList.remove("clicking"),
        n.classList.remove("clicking"),
        n.style.transform = "translate(-50%, -50%) rotate(45deg)"
    }), !0);
    let l = !1;
    let c = 0,
        i = 0,
        d = 0,
        u = 0;
    const m = .15;
    document.addEventListener("mousemove", (e => {
        c = e.clientX,
        i = e.clientY,
        l && (d = c, u = i)
    })),
    s(),
    function() {
        const e = document.querySelectorAll("a, button, [data-cursor='hover'], .loading_button-container, .tech_description-header-wrap"),
            a = document.querySelectorAll(".global-navbar-link, .global-navbar_back-link"),
            c = document.querySelector(".collections-main_heading.link.is-clickable.is-ember"),
            i = document.querySelector(".collections-main_heading.link.is-clickable.is-nebula");
        function d(s) {
            t.classList.remove("hover", "blur-default", "blur-navbar"),
            t.classList.add("hover"),
            n.classList.add("hover"),
            r.style.opacity = "0",
            l = !0,
            s.classList.contains("global-navbar-link") || s.classList.contains("global-navbar_back-link") ? t.classList.add("blur-navbar") : (e || emberElements || nebulaElements) && t.classList.add("blur-default"),
            s === c ? o("#FDFDCE") : s === i && o("#877FCB")
        }
        function u() {
            t.classList.remove("hover", "blur-default", "blur-navbar"),
            n.classList.remove("hover"),
            r.style.opacity = "1",
            l = !1,
            s()
        }
        e.forEach((e => {
            e.addEventListener("mouseenter", (() => d(e))),
            e.addEventListener("mouseleave", u)
        })),
        a.forEach((e => {
            e.addEventListener("mouseenter", (() => d(e))),
            e.addEventListener("mouseleave", u)
        })),
        c && (c.addEventListener("mouseenter", (() => d(c))), c.addEventListener("mouseleave", u)),
        i && (i.addEventListener("mouseenter", (() => d(i))), i.addEventListener("mouseleave", u))
    }(),
    function o() {
        if (l || a)
            e.style.transform = `translate(${c}px, ${i}px)`;
        else {
            d += (c - d) * m,
            u += (i - u) * m,
            e.style.transform = `translate(${d}px, ${u}px)`
        }
        t.style.transform = "translate(-50%, -50%) rotate(45deg)",
        r.style.transform = `translate(${c - d}px, ${i - u}px) translate(-50%, -50%) rotate(45deg)`,
        n.style.left = "0px",
        n.style.top = "0px",
        n.style.transform = "translate(-50%, -50%) rotate(45deg)",
        requestAnimationFrame(o)
    }();
    document.querySelectorAll(".tech_description-header-wrap").forEach((e => {
        e.addEventListener("click", (() => {
            setTimeout(s, 10)
        }))
    }))
}));
