import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

print(pd.__version__)

def predict(prediction_data):
    dyslexia_data = pd.read_csv("backend\Dys_Cleaned2.csv")
    X = dyslexia_data.drop(columns=['Dyslexia'])
    y = dyslexia_data['Dyslexia']
    model = DecisionTreeClassifier()
    model.fit(X, y)
    prediction_data = pd.DataFrame([prediction_data], columns=X.columns)  # Convert list to DataFrame
    predict = model.predict(prediction_data)
    return predict
y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
x = [1, 7, 2, 2, 0, 2, 1, 0, 3, 3, 0, 3, 1, 8, 5, 3, 2, 3, 0, 6, 0, 4, 9, 1, 0.1, 0.1]
print(predict(y))
