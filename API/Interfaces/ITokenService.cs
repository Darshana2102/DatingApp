using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
       // string CreateToken(AppUser user);
    }

    // public interface ITokenService
    // {
    //     string CreateToken(AppUser user);
    // }
}