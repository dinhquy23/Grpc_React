import { EmployeesServicesClient } from "./Protos/Employee_grpc_web_pb";
import { Empty } from "./Protos/Employee_pb";
import './App.css';

const empClient = new EmployeesServicesClient("https://localhost:7126", null, null);

function Emplopyees() {
    var req = new Empty();
    empClient.getAll(req, null, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        var model = res.toObject();
        model.itemsList.forEach(element => {
            console.log(element);
        });
    });
}
export default Emplopyees;
