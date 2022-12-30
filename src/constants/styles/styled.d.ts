import "@emotion/react";

declare module "@emotion/react" {
  export interface DefaultTheme {
    // 바뀌는 색
    //--------------------------------------------------
    bgColor: string;
    bgWhiteColor: string;
    bgWhiteTransColor1: string;
    bgWhiteTransColor2: string;
    bgBlackTransColor: string;
    //--------------------------------------------------

    //--------------------------------------------------
    textColor: string;
    textWhiteColor: string;
    textAcentColor: string;
    //--------------------------------------------------

    //--------------------------------------------------
    GoogleBtrColor: string;
    GoogleTextColor: string;
    //--------------------------------------------------

    //--------------------------------------------------
    grayscaleblackColor: string;
    grayscalewhiteColor: string;
    grayscale1Color: string;
    grayscale2Color: string;
    grayscale3Color: string;
    grayscale4Color: string;
    grayscale5Color: string;
    grayscale6Color: string;
    //--------------------------------------------------

    // 바뀌지 않는 색
    //--------------------------------------------------
    primaryMint: string;
    primaryGreen: string;
    //--------------------------------------------------

    //--------------------------------------------------
    primaryMint__1: string;
    primaryMint__2: string;
    primaryMint__3: string;

    primaryGreen__1: string;
    primaryGreen__2: string;
    primaryGreen__3: string;
    //--------------------------------------------------

    //--------------------------------------------------
    primaryMintYellow__1: string;
    primaryMintYellow__2: string;
    primaryMintYellow__3: string;
    primaryMintYellow__4: string;
    primaryMintYellow__5: string;

    primaryGreenMint__1: string;
    primaryGreenMint__2: string;
    primaryGreenMint__3: string;
    //--------------------------------------------------

    //--------------------------------------------------
    secondaryDarkGreen__1: string;
    secondaryDarkGreen__2: string;
    secondaryDarkGreen__3: string;

    secondaryDarkBlue__1: string;
    secondaryDarkBlue__2: string;
    secondaryDarkBlue__3: string;

    secondaryLightGreen__1: string;
    secondaryLightGreen__2: string;
    secondaryLightGreen__3: string;

    secondaryLightBlue__1: string;
    secondaryLightBlue__2: string;
    secondaryLightBlue__3: string;

    secondaryBlue__1: string;
    secondaryBlue__2: string;
    secondaryBlue__3: string;
    //--------------------------------------------------

    //--------------------------------------------------
    infoColor: string;
    dangerColor: string;
    successColor: string;
    warningColor: string;
    //--------------------------------------------------

    //--------------------------------------------------
    btnColor: string;
    //--------------------------------------------------
  }
}
