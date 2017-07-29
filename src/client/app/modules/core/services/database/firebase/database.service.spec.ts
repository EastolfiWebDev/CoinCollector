import { Provider, FactoryProvider } from "@angular/core";
import { TestBed } from "@angular/core/testing";

// App
import { t } from "../../../../test/index";

import { Config } from "../../../utils/config";
// import {
//     WebDatabaseService
// } from "../../../services/database/firebase/database.service";


export function main() {
    t.describe("Database test", () => {
        t.be(() => {
            Config.RESET();
            
            // t.spyOn()
            
            TestBed.configureTestingModule({
                providers: [
                    
                ]
            });
        });
        // t.it("test", t.inject([ WebDatabaseService ], (databaseService: WebDatabaseService) => {
        //     t.e(databaseService.sync).toBeDefined();
        // }));
        t.it("should work", () => {
            t.e(1).toBeDefined();
        });
    });
}