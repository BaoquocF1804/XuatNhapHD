import { IStock } from "@/types";
import { easyReadMoney } from "@/utils/convert";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import FormInputNoControl from "./FormInputNoControl";

const StyledStockContainer = styled.div`
  .row-container {
    display: flex;
    gap: 40px;
    margin: 0 8px 12px;
    align-items: center;
    .stock_total {
      font-size: 16px;
    }
  }
`;
const StockRow = ({
  setStocks,
  stocks,
  index,
}: {
  setStocks: Dispatch<SetStateAction<IStock[]>>;
  stocks: IStock[];
  index: number;
}) => {
  const [stock, setStock] = useState<IStock>({
    stockName: "",
    stockAmount: 0,
    stockPrice: 0,
    stockTotal: 0,
  });

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setStock((prev: IStock) => {
      return { ...prev, stockName: e.target.value as string };
    });
  };
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setStock((prev: IStock) => {
      return { ...prev, stockPrice: Number(e.target.value) };
    });
  };
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setStock((prev: IStock) => {
      return { ...prev, stockAmount: Number(e.target.value) };
    });
  };
  useEffect(() => {
    setStocks((prev: IStock[]) => {
      const prevStocks = [...prev];
      prevStocks[index] = stock;
      return prevStocks;
    });
  }, [stock]);
  useEffect(() => {
    setStock((prev: IStock) => {
      return {
        ...prev,
        stockTotal: prev.stockAmount * prev.stockPrice * 1000,
      };
    });
  }, [stock.stockPrice, stock.stockAmount]);
  return (
    <StyledStockContainer>
      <div className="row-container">
        <FormInputNoControl
          labelString="Tên mặt hàng"
          handleInput={handleName}
        />
        <FormInputNoControl
          handleInput={handlePrice}
          labelString="Đơn giá (Nghìn đồng)"
          placeholder="Ví dụ: (60)"
        />
        <FormInputNoControl labelString="Số lượng" handleInput={handleAmount} />
      </div>
      <div className="row-container">
        <div className="stock_total">
          Thành tiền: {easyReadMoney(stock.stockTotal)}
        </div>
      </div>
    </StyledStockContainer>
  );
};

export default StockRow;
