using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppUser
    {
        public AppUser(string userName)
        {
            UserName = userName;
        }

        public int Id{ get; set;}
        public string UserName { get; set;}
    }
}