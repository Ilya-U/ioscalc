function show(arg)
{
    if (document.getElementById("screen").innerHTML == 0 || document.getElementById("screen").innerHTML == "Error" || document.getElementById("screen").innerHTML == "NaN")
    {
        document.getElementById("screen").innerHTML = arg;
        return;
    }
    document.getElementById("screen").innerHTML += arg;
}

function result()
{
    ans = eval(document.getElementById("screen").innerHTML);
    if (ans == Infinity || ans == -Infinity)
    {
        document.getElementById("screen").innerHTML = "Error";
        return;
    }
    document.getElementById("screen").innerHTML = ans.toFixed(8);
}

function Clear()
{
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
