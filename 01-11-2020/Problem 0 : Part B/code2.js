// Loop over the accidents array. Change atFaultForAccident from true to false.
for(i=0; i<myCar.accidents.length; i++)
{
    myCar.accidents[i].atFaultForAccident = false;
    console.log(myCar.accidents[0].atFaultForAccident)
}

// Print the dated of my accidents
for(i=0; i<myCar.accidents.length; i++)
{
    console.log(myCar.accidents[i].date)
}
