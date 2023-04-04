
export const menu = [
    { title: "Authentication",
        tabs: [ {
            name: "User",
            path: "/auth"
        }, 
        {
            name:"Sing-In method",
            path: "/auth/register"
        },
        {
            name:"Login",
            path:"/auth/login"
        }
        ]
    },
    {
        title: "Projects",
        tabs:[{
            name: "Project List",
            path: "/projects"
        },
        {
            name: "New Project",
            path: "/projects/add"
        }]
    },
    {
        title: "Presenza",
        tabs:[{
            name: "Ingresso/Uscita",
            path: "/presenza"
        },
        {
            name: "Lista Presenza",
            path: "/presenza/lista"
        }]
    }    
]
   
