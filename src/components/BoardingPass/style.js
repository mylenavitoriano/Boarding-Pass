import styled from "styled-components";

export const BoardingPassStyled = styled.div`
    background: #FFF;
    width: 20.375rem;
    height: 34rem;
    border-radius: 1rem;
    
    .flightData{
        border-bottom: 1px dashed #DADADA;
        padding: 1.5rem 2rem;

        .price_date{
            display: flex;
            align-items: center;
            justify-content: space-between;

            p{
                font-size: 0.875rem;
                color: #000;
                opacity: .64;
            }

            h4{
                font-size: 1rem;
                font-weight: 500;
                color: #000;
                opacity: .88;
            }

            .price{
                text-align: start;
            }

            .date{
                text-align: end;
            }
        }


        .destiny{
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            margin-top: 1.5rem;
    
            p{
                font-size: 0.875rem;
                color: #000;
                position: relative;
    
                &.city{
                    opacity: .64;
                }
                &.time{
                    opacity: .80;
                    margin-right: 10px;
                }
    
                span{
                    font-size: 0.625rem;
                    position: absolute;
                }
            }
    
            h4{
                font-size: 2.5rem;
                font-weight: 500;
                color: #000;
                opacity: .88;
            }
    
            .going{
                text-align: end;
            }
    
            svg{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    .passengerData{
        border-bottom: 1px dashed #DADADA;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        span{
            position: absolute;
            content: '';
            background-color: #593c9d;
            width: 12px;
            height: 24px;

            &.block1{
                top: -12px;
                left: 0;
                border-radius: 0 1rem 1rem 0;

            }

            &.block2{
                top: -12px;
                right: 0;
                border-radius: 1rem 0 0 1rem;
            }

            &.block3{
                bottom: -12px;
                right: 0;
                border-radius: 1rem 0 0 1rem;
            }

            &.block4{
                bottom: -12px;
                left: 0;
                border-radius: 0 1rem 1rem 0;

            }
        }

        p{
            font-size: 0.875rem;
            color: #000;
            opacity: .64;
        }

        h4{
            font-size: 1rem;
            font-weight: 500;
            color: #000;
            opacity: .88;
        }

        .seat{
            text-align: end;
        }
    }

    .boardingData{
        padding: 1.5rem 2rem;

        .data{
            display: flex;
            justify-content: space-between;

            .blockLeft{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
                

                p{
                    font-size: 0.875rem;
                    color: #000;
                    opacity: .64;
                } 

                h4{
                    font-size: 1rem;
                    font-weight: 500;
                    color: #000;
                    opacity: .88;

                    &.time{
                        color: #FFF;
                        opacity: 1;
                        background: #633BBC;
                        padding: .25rem .5rem;
                        text-align: center;
                        border-radius: .5rem;
                        width: fit-content;
                        margin-top: 0.125rem;
                    }
                }
            }

            .blockRight{
                display: flex;
                flex-direction: column;
                align-items: center;

                p{
                    font-size: 0.875rem;
                    color: #000;
                    opacity: .64;
                } 
            }
        }

        .attention{
            text-align: center;
            margin-top: 1.5rem;

            p{
                font-size: 1rem;
                color: #000;
                opacity: .80;
            } 
        }
    }

`