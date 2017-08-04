<?php 
/*
Developer:  Rajashri Lawande
File:       index.php
*/
?>
<?php include_once "header.php";?>
  
      <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
          <div class="panel-heading">
              <div class="panel-title">Login to dashboard</div>
          </div>
          <div style="padding-top:30px" class="panel-body" >
            <form name="login" ng-submit="angCtrl.loginForm()" class="form-horizontal" method="POST">
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input type="email" id="inputemail" class="form-control" required autofocus ng-model="angCtrl.inputData.email" placeholder="Email">
              </div>
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input type="password" id="inputpassword" class="form-control" required ng-model="angCtrl.inputData.password" placeholder="Password">
              </div>
              <div class="form-group">
                <!-- Button -->
                <div class="col-sm-12 controls">
                    <button type="submit" class="btn btn-primary pull-left"><i class="glyphicon glyphicon-log-in"></i> Log in</button>
                    <a href="sign-up-form.php"><button type="button" class="btn btn-primary pull-right"><i class="glyphicon glyphicon glyphicon-new-window"></i> Sign Up</button></a>
                </div>
              </div>
              <div class="alert alert-danger" ng-show="errorMsg">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                    ×</button>
                <span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp;{{errorMsg}}
              </div>
            </form>
          </div>
        </div>
      </div>
<?php include_once "footer.php";?>