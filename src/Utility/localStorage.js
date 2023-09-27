const getStoredDonation=()=>{
    const storedDonation=localStorage.getItem('donation');
    if(storedDonation){
       return JSON.parse(storedDonation) 
    }
    return [];
}




const saveItemToLocalStorage=(id)=>{
    const storedDonation=getStoredDonation();
    const exits=storedDonation.find(donationId=> donationId===id)
    if(!exits){
        storedDonation.push(id);
        localStorage.setItem('donation',JSON.stringify(storedDonation));
        return false;
    }
    return true;
}
export { getStoredDonation, saveItemToLocalStorage };

