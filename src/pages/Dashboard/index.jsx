import InfoBox from "../../components/InfoBox/InfoBox"
import HeroCentered from "../../components/Utility/HeroCentered"
import { useAuth } from "../../contexts/AuthenticationContext"
import { Toast } from '../../assets/util/swal';

const ActionButtons = function(props){
    const auth = useAuth();
    const currentUser = auth.currentUser;
    const logoutHandler = async () => {
        if(currentUser){
            await auth.logout().then(function(val){
                console.log("Logged out user.")
            });
        }else{
            await auth.logout().then(function(val){
                console.log("Logged out user.")
            });
            Toast.fire({
                icon: 'error',
                title: 'No logged in user.'
            });
        }
        
    }
    const checkUserHandler = () =>{
        if(currentUser){
            console.log(currentUser);
            Toast.fire({
                icon: 'info',
                title: 'User Session exists.'
            });
        }else{
            Toast.fire({
                icon: 'warning',
                title: 'User Session does not exists.'
            });
        }
    }
    return(
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-danger btn-lg px-4 gap-3" onClick={logoutHandler}>Logout</button>
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={checkUserHandler}>Check User</button>
        </div>
    )
};

export default function DashboardIndex(){
    const auth = useAuth();
    const currentUser = auth.currentUser;
    return (
        <>
        <main className="container">
            <div className="mt-4">
                <h1>Welcome {currentUser.displayName ?? currentUser.email}</h1>
            </div>
            
            <section className="content mt-4">
                <div className="row">
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox dataLabel="Posts" dataText={`0`} iconBGClass={"bg-warning"} iconClass={"bi bi-sticky"}></InfoBox>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox dataLabel="Interactions" dataText={`0`} iconBGClass={"bg-primary"} iconClass={"bi bi-star"}></InfoBox>
                    </div>
                    {/* Tabular Report */}
                    <div className="pt-4 pb-4">
                        <HeroCentered 
                            iconClass={"bi bi-cone-striped"}  
                            headerText="In Development" 
                            content="Just want to put this here.." 
                            appendComponent ={<><ActionButtons/></>}>
                        </HeroCentered>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}