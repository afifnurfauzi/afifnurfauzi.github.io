// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"Parcellaszerkeszt\u0151",newTraverseButtonLabel:"\u00daj soksz\u00f6gel\u00e9s ind\u00edt\u00e1sa",invalidConfigMsg:"\u00c9rv\u00e9nytelen konfigur\u00e1ci\u00f3",geometryServiceURLNotFoundMSG:"Nem siker\u00fclt meghat\u00e1rozni a geometriai adatszolg\u00e1ltat\u00e1s URL-c\u00edm\u00e9t",editTraverseButtonLabel:"Soksz\u00f6gel\u00e9s szerkeszt\u00e9se",mapTooltipForStartNewTraverse:"A kezd\u00e9shez jel\u00f6lj\u00f6n ki egy pontot a t\u00e9rk\u00e9pen vagy lent \u00edrja be az \u00e9rt\u00e9ket",
mapTooltipForEditNewTraverse:"Jel\u00f6lj\u00f6n ki egy szerkeszteni k\u00edv\u00e1nt parcell\u00e1t",mapTooltipForUpdateStartPoint:"Kattintson a kezd\u0151pont friss\u00edt\u00e9s\u00e9hez",mapTooltipForScreenDigitization:"Kattintson egy parcellapont hozz\u00e1ad\u00e1s\u00e1hoz",mapTooltipForUpdatingRotaionPoint:"Kattintson az elforgat\u00e1si pont friss\u00edt\u00e9s\u00e9hez",mapTooltipForRotate:"H\u00fazza a forgat\u00e1shoz",mapTooltipForScale:"H\u00fazza a m\u00e9retez\u00e9shez",backButtonTooltip:"Vissza",
newTraverseTitle:"\u00daj soksz\u00f6gel\u00e9s",editTraverseTitle:"Soksz\u00f6gel\u00e9s szerkeszt\u00e9se",clearingDataConfirmationMessage:"A v\u00e1ltoztat\u00e1sok elvesznek. Biztosan folytatja?",unableToFetchParcelMessage:"Nem siker\u00fclt beolvasni a parcell\u00e1t.",unableToFetchParcelLinesMessage:"Nem siker\u00fclt beolvasni a parcellavonalakat.",planSettings:{planSettingsTitle:"Be\u00e1ll\u00edt\u00e1sok",directionOrAngleTypeLabel:"Ir\u00e1ny- vagy sz\u00f6gt\u00edpus",directionOrAngleUnitsLabel:"Ir\u00e1ny- vagy sz\u00f6gegys\u00e9gek",
distanceAndLengthUnitsLabel:"T\u00e1vols\u00e1g- \u00e9s hosszm\u00e9rt\u00e9kegys\u00e9gek",areaUnitsLabel:"Ter\u00fclet m\u00e9rt\u00e9kegys\u00e9gek",circularCurveParameters:"K\u00f6r\u00edves g\u00f6rb\u00e9k param\u00e9terei",northAzimuth:"\u00c9szaki azimut",southAzimuth:"D\u00e9l azimut",quadrantBearing:"Ir\u00e1nysz\u00f6g kvadr\u00e1nsok szerint",radiusAndChordLength:"Sug\u00e1r- \u00e9s h\u00farhossz",radiusAndArcLength:"Sug\u00e1r- \u00e9s \u00edvhossz",expandGridTooltipText:"R\u00e1cs kibont\u00e1sa",
collapseGridTooltipText:"R\u00e1cs bez\u00e1r\u00e1sa",zoomToLocationTooltipText:"Zoomol\u00e1s a helyre",onScreenDigitizationTooltipText:"Digitaliz\u00e1l\u00e1s",updateRotationPointTooltipText:"Elforgat\u00e1si pont friss\u00edt\u00e9se"},traverseSettings:{bearingLabel:"Ir\u00e1nysz\u00f6g",lengthLabel:"Hossz",radiusLabel:"Sug\u00e1r",noMiscloseCalculated:"Az elt\u00e9r\u00e9s nincs kisz\u00e1m\u00edtva",traverseMiscloseBearing:"Elt\u00e9r\u00e9si ir\u00e1nysz\u00f6g",traverseAccuracy:"Pontoss\u00e1g",
accuracyHigh:"Magas",traverseDistance:"Elt\u00e9r\u00e9s t\u00e1vols\u00e1ga",traverseMiscloseRatio:"Elt\u00e9r\u00e9si ar\u00e1ny",traverseStatedArea:"R\u00f6gz\u00edtett ter\u00fclet",traverseCalculatedArea:"Sz\u00e1m\u00edtott ter\u00fclet",addButtonTitle:"Hozz\u00e1ad\u00e1s",deleteButtonTitle:"Elt\u00e1vol\u00edt\u00e1s"},parcelTools:{rotationToolLabel:"Sz\u00f6g",scaleToolLabel:"M\u00e9retar\u00e1ny"},newTraverse:{invalidBearingMessage:"\u00c9rv\u00e9nytelen ir\u00e1nysz\u00f6g.",invalidLengthMessage:"\u00c9rv\u00e9nytelen hossz.",
invalidRadiusMessage:"\u00c9rv\u00e9nytelen sug\u00e1r.",negativeLengthMessage:"Csak g\u00f6rb\u00e9kre \u00e9rv\u00e9nyes",enterValidValuesMessage:"Adjon meg \u00e9rv\u00e9nyes \u00e9rt\u00e9keket.",enterValidParcelInfoMessage:"Adjon meg \u00e9rv\u00e9nyes parcellaadatokat a ment\u00e9shez.",unableToDrawLineMessage:"Nem siker\u00fclt a vonal megrajzol\u00e1sa.",invalidEndPointMessage:"\u00c9rv\u00e9nytelen v\u00e9gpont, a vonal nem rajzolhat\u00f3 meg.",lineTypeLabel:"Vonalt\u00edpus"},planInfo:{requiredText:"(k\u00f6telez\u0151)",
optionalText:"(opcion\u00e1lis)",parcelNamePlaceholderText:"Parcella neve",parcelDocumentTypeText:"Dokumentumt\u00edpus",planNamePlaceholderText:"Terv neve",cancelButtonLabel:"M\u00e9gse",saveButtonLabel:"Ment\u00e9s",saveNonClosedParcelConfirmationMessage:"A megadott parcella nincs lez\u00e1rva. Ennek ellen\u00e9re folytatja \u00fagy, hogy csak a parcellavonalakat menti?",unableToCreatePolygonParcel:"Nem siker\u00fclt l\u00e9trehozni a parcella polygonj\u00e1t.",unableToSavePolygonParcel:"Nem siker\u00fclt menteni a parcella polygonj\u00e1t.",
unableToSaveParcelLines:"Nem siker\u00fclt menteni a parcella vonalait.",unableToUpdateParcelLines:"Nem siker\u00fclt friss\u00edteni a parcella vonalait.",parcelSavedSuccessMessage:"Parcella sikeresen mentve.",parcelDeletedSuccessMessage:"Telek sikeresen t\u00f6r\u00f6lve.",parcelDeleteErrorMessage:"Hiba t\u00f6rt\u00e9nt a telek t\u00f6rl\u00e9sekor.",enterValidParcelNameMessage:"Adjon meg \u00e9rv\u00e9nyes nevet a parcell\u00e1hoz.",enterValidPlanNameMessage:"Adjon meg \u00e9rv\u00e9nyes nevet a tervhez.",
enterValidDocumentTypeMessage:"\u00c9rv\u00e9nytelen dokumentumt\u00edpus.",enterValidStatedAreaNameMessage:"Adjon meg \u00e9rv\u00e9nyes r\u00f6gz\u00edtett ter\u00fcletet."},xyInput:{explanation:"Adja meg a koordin\u00e1t\u00e1kat a r\u00e9teggel megegyez\u0151 t\u00e9rbeli vonatkoztat\u00e1si rendszerben"},_localized:{}}});