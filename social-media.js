class SocialMedia {
    link = null
    socialLink = {
        wa: {
            selector: "a[wa-social]",
            link: "https://api.whatsapp.com/send?text=1%",
            attribute: {
                "data-action": "share/whatsapp/share",
            }
        },
        fb: {
            selector: "a[fb-social]",
            link: "https://www.facebook.com/sharer.php?u=1%",
        },
        twitter:{
            selector: 'a[twitter-social]',
            link: "https://twitter.com/intent/tweet?url=1%&text=2%",
            args: [document.title]
        },
        linkin: {
            selector: 'a[linkin-social]',
            link: "https://www.linkedin.com/shareArticle?mini=true&url=1%",
        }
    }

    constructor() {
        this.link = window.location.href
        Object.keys(this.socialLink).forEach(e => {
            this.constructLink(this.socialLink[e])
        })
    }

    constructLink = (arg) => {
        let el = document.querySelectorAll(arg.selector)
        let link = arg.link.replace("1%", this.link);
        if(arg.args){
            arg.args.forEach((e,i)=>{
                link = link.replace((i+2)+"%", e)
            })
        }
        //set link
        Array.prototype.forEach.call(el, (e) => {
            e.setAttribute("href", link)
            //set attribute
            if (arg.attribute)
                Object.keys(arg.attribute).forEach(att => {
                    e.setAttribute(att, arg.attribute[att])
                })

        })
    }
}


new SocialMedia()