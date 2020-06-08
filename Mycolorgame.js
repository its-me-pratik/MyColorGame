var colu = document.querySelectorAll(".col");
var k=Math.floor((Math.random() * 6));
var mid = document.querySelector("#middle");
var firstc = document.querySelector("#container1");
var numberc1 = document.querySelector("#no1");
var numberc2 = document.querySelector("#no2");
var numberc3 = document.querySelector("#no3");
var correcti = [Math.floor((Math.random() * 256) + 1),Math.floor((Math.random() * 256) + 1),Math.floor((Math.random() * 256) + 1)];
var corrects = [correcti[0].toString(),correcti[1].toString(),correcti[2].toString()];

console.log(k);
//  ------------------------------------------------------------------------------------------------------------------------------
for(var i=0;i<colu.length;i++)
{
    if(i!=k)
    {
        var a=Math.floor((Math.random() * 256) + 1);
        var b=Math.floor((Math.random() * 256) + 1);
        var c=Math.floor((Math.random() * 256) + 1);
        a.toString();
        b.toString();
        c.toString();
        colu[i].style.backgroundColor = "rgb("+a+", "+b+", "+c+")";
    }
}
// --------------------------------------------------------------------------------------------------------------------------------------
console.log(correcti);
colu[k].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
numberc1.textContent = corrects[0];
numberc2.textContent = corrects[1];
numberc3.textContent = corrects[2];
// --------------------------------------------------------------------------------------------------------------------------------------
var newcol = document.querySelector("#newcolors");
newcol.addEventListener("mouseover", function () {
    newcol.style.backgroundColor = "rgb(63, 198, 231)";
    });
newcol.addEventListener("mouseout", function () {
    newcol.style.backgroundColor = "aliceblue";
    });
var eas = document.querySelector("#easy");
eas.addEventListener("mouseover", function () {
    eas.style.backgroundColor = "rgb(63, 198, 231)";
    });
eas.addEventListener("mouseout", function () {
    eas.style.backgroundColor = "aliceblue";
    });
// --------------------------------------------------------------------------------------------------------------------------------------

colu[0].addEventListener("click", function () {
    if(k!=0)
    {
        colu[0].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        mid.textContent = "CORRECT!";
        newcol.textContent = "PLAY AGAIN";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
    }
    });
colu[1].addEventListener("click", function () {
    if(k!=1)
    {
        colu[1].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        newcol.textContent = "PLAY AGAIN";
        mid.textContent = "CORRECT!";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";

    }
    });
colu[2].addEventListener("click", function () {
    if(k!=2)
    {
        colu[2].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        newcol.textContent = "PLAY AGAIN";
        mid.textContent = "CORRECT!";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";

    }
    });
colu[3].addEventListener("click", function () {
    if(k!=3)
    {
        colu[3].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        newcol.textContent = "PLAY AGAIN";
        mid.textContent = "CORRECT!";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";

    }
    });
colu[4].addEventListener("click", function () {
    if(k!=4)
    {
        colu[4].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        newcol.textContent = "PLAY AGAIN";
        mid.textContent = "CORRECT!";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";

    }
    });
colu[5].addEventListener("click", function () {
    if(k!=5)
    {
        colu[5].style.backgroundColor = "black";
        mid.textContent = "TRY AGAIN";
        newcol.textContent = "NEW COLORS";
    }
    else
    {
        newcol.textContent = "PLAY AGAIN";
        mid.textContent = "CORRECT!";
        for(var i=0;i<colu.length;i++)
        {
            colu[i].style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";
        }
        firstc.style.backgroundColor = "rgb("+corrects[0]+", "+corrects[1] + ", "+corrects[2]+")";

    }
    });
    function reset()
    {
        var m=Math.floor((Math.random() * 6));
        console.log(m);
        var correcti1 = [Math.floor((Math.random() * 256) + 1),Math.floor((Math.random() * 256) + 1),Math.floor((Math.random() * 256) + 1)];
        var corrects1 = [correcti1[0].toString(),correcti1[1].toString(),correcti1[2].toString()];
    
        for(var i=0;i<colu.length;i++)
        {
            if(i!=m)
            {
                var a=Math.floor((Math.random() * 256) + 1);
                var b=Math.floor((Math.random() * 256) + 1);
                var c=Math.floor((Math.random() * 256) + 1);
                a.toString();
                b.toString();
                c.toString();
                colu[i].style.backgroundColor = "rgb("+a+", "+b+", "+c+")";
            }
        }
        firstc.style.backgroundColor = "rgb(63, 198, 231)";
        newcol.textContent = "NEW COLORS";
        numberc1.textContent = corrects1[0];
        numberc2.textContent = corrects1[1];
        numberc3.textContent = corrects1[2];
        colu[m].style.backgroundColor = "rgb("+corrects1[0]+", "+corrects1[1] + ", "+corrects1[2]+")";
        k=m;
        correcti=correcti1;
        corrects=corrects1;
    }
    
newcol.addEventListener("click", reset);


    


