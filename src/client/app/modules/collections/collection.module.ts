// Angular Imports
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Shared Module (Navbar, toolbar...)
import { SharedModule } from "../shared/index";
// Translation Module
import { MultilingualModule } from "../i18n/multilingual.module";
import { SAMPLE_PROVIDERS } from "./services/index";

@NgModule({
    imports: [
        SharedModule, MultilingualModule
    ],
    providers: [
        ...SAMPLE_PROVIDERS
    ],
    schemas: [
        NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        SharedModule
    ]
})
export class CollectionModule {
    constructor(@Optional() @SkipSelf() parentModule: CollectionModule) {
        if (parentModule) {
            throw new Error("CollectionModule already imported. Import it in root module only.");
        }
    }
}