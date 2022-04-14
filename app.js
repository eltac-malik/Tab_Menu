let tabs = document.querySelectorAll('[data-tab-target]')
let tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>
    {
        tab.addEventListener("click",()=>
        {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tbCont=>
                {
                    tbCont.classList.remove("active")
                })
          target.classList.add("active")
        })
    })