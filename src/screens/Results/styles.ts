import styled from 'styled-components';

export const ResultsWrapper = styled.div`
    background: #222;
    padding: 40px 20px;
    min-height: 100vh;
    max-height: 100vh;
    .app {
        background: #D6B311;
        padding: 30px 30px;
        height: calc(100vh - 80px);
        overflow: scroll;
        border-radius: 10px;
        .masthead {
            text-align: center;
            height: 150px;
            h1 {
                margin-bottom: 4px;
            }
            p {
                font-weight: 400;
            }
            .input-pane {
                .input-group {
                    box-shadow: 0 2px 5px 2px rgba(0,0,0,0.1);
                    border-radius: 6px;
                }
                input {
                    height: 50px;
                    padding: 0px 20px;
                    border-radius: 6px;
                    font-size: 14px;
                    background: #222;
                    color: #fff;
                    border: 2px solid #222;
                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }
                button {
                    font-size: 14px;
                    padding: 0px 25px;
                    background: #fff;
                    color: #222;
                    border-color: #fff;
                    border-left: 1px solid #fff;
                }
            }
        }
        .words-of-the-day {
            &.overflow {
                /* overflow: scroll;
                height: calc(100vh - 150px - 60px - 80px); */
            }
            padding: 20px 0px;
            h3 {
                font-size: 20px;
            }
            .words-item {
                background: #f2f2f2;
                padding: 20px;
                margin-bottom: 16px;
                border-radius: 6px;
                box-shadow: 0 2px 5px 2px rgba(0,0,0,0.1);
                h3 {
                    font-size: 18px;
                    margin-bottom: 4px;
                }
                p {
                    font-size: 13px;
                    margin-bottom: 0px;
                    &.sound {
                        margin-bottom: 8px;
                    }
                }
            }
        }
    }
`;