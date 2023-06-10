let age=18;
let hasVoterIdCard='Yes';

if( age>=15 || hasVoterIdCard=='Yes')
{
    if(age<=12){
        alert('You can vote!')
    }
    else{
        alert('No')
    }
}
else{
    alert('You can not vote');
}