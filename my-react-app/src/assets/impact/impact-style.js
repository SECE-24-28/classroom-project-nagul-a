import styled from "styled-components";

export const ImpactStyle = styled.section`
.impact{
    position: relative;
    overflow: hidden;
    padding: 3rem 0px;
    }
.para{
    text-align:center;
    font-size:40px;
    font-weight:600;
    font-family: Inter, sans-serif;
    margin-bottom: 2rem;

    }
.glan{
    color: rgb(252, 41, 71);
    }

*, :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    .box{
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    -webkit-box-pack: center;
    justify-content: center;
}
    .pink{
        position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
    background-color: rgb(255, 223, 228);}

    .head{
    font-size:16px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    color: rgb(51, 65, 85);
    }
    .val{
            font-size: 22px;
            font-size: 24px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 20px;
    color: rgb(0, 0, 0);
            }
    .blue{
        background-color: rgb(226, 240, 250);
        position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
        }
    .green{
        background-color: rgb(222, 255, 236);
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;
    }
    .orange{
        background-color: rgb(255, 230, 199);
    position: relative;
    width: 450px;
    display: flex;
    padding: 1rem 1rem 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    overflow: visible;
    z-index: 1;}

    img {
    overflow-clip-margin: content-box;
    overflow: clip;
}
    .image{
    height: 90px;
    position: absolute;
    bottom: -25px;
    right: 20px;
    height: 120px;
    width: auto;
    object-fit: contain;
    z-index: 2;
    }

`;