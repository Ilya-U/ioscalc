function show(arg)
{
    if (document.getElementById("screen").innerHTML == 0 || document.getElementById("screen").innerHTML == "Не определено" || document.getElementById("screen").innerHTML == "NaN")
    {
        document.getElementById("screen").innerHTML = arg;
        return;
    }
    document.getElementById("screen").innerHTML += arg;
}

function count(arg)
{
    ans = eval(arg);
    if (ans == Infinity || ans == -Infinity || ans == NaN)
    {
        return "Не определено";
    }

    return ans;
}

function result()
{
    let ans = count(document.getElementById("screen").innerHTML);
    if (String(ans) == "Не определено")
    {
        document.getElementById("screen").style.fontSize = "350%";
    }
    else if (String(ans).length > 10)
    {
        document.getElementById("screen").style.fontSize = "300%";
    }
    document.getElementById("screen").innerHTML = ans;
}

function Clear()
{
    if (document.getElementById("screen").style.fontSize == "350%" || document.getElementById("screen").style.fontSize == "300%") {
        document.getElementById("screen").style.fontSize = "450%";
    }

    document.getElementById("screen").innerHTML = "0";
}

function minus()
{
    document.getElementById("screen").innerHTML = -(document.getElementById("screen").innerHTML);
}

function percent()
{
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML / 100
}
