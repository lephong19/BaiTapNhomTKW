export function initToTop() 
{
    const btn=document.getElementById("back-to-top")
    const sentinel=document.getElementById("nav-sentinel")
    if(!btn || !sentinel) return
    const  observer=new IntersectionObserver(
        ([entry])=>{
            btn.classList.toggle("is-visible",!entry.isIntersecting)
        },
        {rootMargin: "400px 0px 0px 0px "}
    )
    observer.observe(sentinel)

    btn.addEventListener("click",()=>{
        const isReducedMotion=window.matchMedia("(prefers-reduced-motion: reduce").matches;
        window.scrollTo({
              top:0,
        behavior:isReducedMotion?"auto":"smooth"
        });
        document.querySelector("header a , header button");
      document.body.focus() ;
    });

}
function setOpen(open)
{
    menu.classList.toggle("hidden",!open)
    toggle.setAttribute("aria-expended",string (open));
    toggle.setAttribute("aria-label",open?"Dong menu" : "Mo menu")
    document.body.classList("overflow-hidden",open)
}
const isOpen=()=>toggle.getAtribute("aria-expanded")

toggle.addEventListener