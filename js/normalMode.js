var score = 0;

$(document).ready(function () {
  $('.score').text(score);
});
//paper button
$('.paperWrapper').mouseover(function () {
  $('.paperWrapper').addClass('animate__animated animate__pulse');
});

$('.paperWrapper').mouseleave(function () {
  $('.paperWrapper').removeClass('animate__animated animate__pulse');
});

$('.paperBtn').on('click', function () {
  $('.gameBoard').css('display', 'none');
  $('.duellboard').css('display', 'flex');
  $('.rules').css('display', 'none');
  aiDesc = getAiDecision();
  playerDesc = 'paper';
  desiscionDisplay(aiDesc, playerDesc);
});

//scissor button
$('.scissorWrapper').mouseover(function () {
  $('.scissorWrapper').addClass('animate__animated animate__pulse');
});

$('.scissorWrapper').mouseleave(function () {
  $('.scissorWrapper').removeClass('animate__animated animate__pulse');
});

$('.scissorBtn').on('click', function () {
  $('.gameBoard').css('display', 'none');
  $('.duellboard').css('display', 'flex');
  $('.rules').css('display', 'none');

  aiDesc = getAiDecision();
  playerDesc = 'scissors';
  desiscionDisplay(aiDesc, playerDesc);
});

//rock button
$('.rockWrapper').mouseover(function () {
  $('.rockWrapper').addClass('animate__animated animate__pulse');
});

$('.rockWrapper').mouseleave(function () {
  $('.rockWrapper').removeClass('animate__animated animate__pulse');
});

$('.rockBtn').on('click', function () {
  $('.gameBoard').css('display', 'none');
  $('.duellboard').css('display', 'flex');
  $('.rules').css('display', 'none');

  aiDesc = getAiDecision();
  playerDesc = 'rock';
  desiscionDisplay(aiDesc, playerDesc);
});

//continue
$('#continue').on('click', function () {
  $('.gameBoard').css('display', 'flex');
  $('.duellboard').css('display', 'none');
  $('.rules').css('display', 'flex');
  reset();
});
//Rule menu
$('#closeBtn').on('click', function () {
  $('.rulesOverlay').css('display', 'none');
});

$('.rules').on('click', function () {
  $('.rulesOverlay').addClass('animate__animated animate__fadeInBottomRight');
  $('.rulesOverlay').css('display', 'flex');
});

function calculateOutcome(aiDesc, playerDesc) {
  switch (playerDesc) {
    case 'scissors':
      switch (aiDesc) {
        case 'scissors':
          draw();
          animateOutcome(0, 0);
          break;
        case 'rock':
          aiWin();
          animateOutcome('ai', 'player');
          break;
        case 'paper':
          playerWin();
          animateOutcome('player', 'ai');
          break;
      }
      break;
    case 'rock':
      switch (aiDesc) {
        case 'scissors':
          playerWin();
          animateOutcome('player', 'ai');
          break;
        case 'rock':
          draw();
          animateOutcome(0, 0);
          break;
        case 'paper':
          aiWin();
          animateOutcome('ai', 'player');
          break;
      }
      break;
    case 'paper':
      switch (aiDesc) {
        case 'scissors':
          aiWin();
          animateOutcome('ai', 'player');
          break;
        case 'rock':
          playerWin();
          animateOutcome('player', 'ai');
          break;
        case 'paper':
          draw();
          animateOutcome(0, 0);
          break;
      }
      break;
  }
}
function aiWin() {
  $('.gameEnd > h1').text('Ai Wins');
  $('.gameEnd').css('display', 'flex');
}
function playerWin() {
  $('.gameEnd > h1').text('Player Wins');
  $('.gameEnd').css('display', 'flex');
  score = score + 1;
  $('.score').text(score);
}
function draw() {
  $('.gameEnd > h1').text('Its a Draw');
  $('.gameEnd').css('display', 'flex');
}

function desiscionDisplay(aiDesc, playerDesc) {
  setTimeout(
    () =>
      $('.ai').css(
        'background-image',
        'url(../images/icon-' + aiDesc + '.svg)'
      ),
    2500
  );
  setTimeout(
    () =>
      $('.player').css(
        'background-image',
        'url(../images/icon-' + playerDesc + '.svg)'
      ),
    2500
  );
  setTimeout(() => calculateOutcome(aiDesc, playerDesc), 3500);
}

function animateOutcome(winner, loser) {
  //draw
  if (winner == 0) {
    $('.player').addClass('animate__animated animate__jello');
    $('.ai').addClass('animate__animated animate__jello');
  } else {
    $('.' + winner).addClass('animate__animated animate__bounce');
    $('.' + loser).addClass('animate__animated animate__hinge');
  }
}
function getAiDecision() {
  randomDesc = Math.floor(Math.random() * 3 + 1);
  switch (randomDesc) {
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'rock';
      break;
    case 3:
      return 'paper';
      break;
  }
}

function reset() {
  $('.player').attr('class', 'player');
  $('.ai').attr('class', 'ai');
  $('.gameEnd').css('display', 'none');
  $('.player').css('background-image', 'url(../images/icon-rock.svg)');
  $('.ai').css('background-image', 'url(../images/icon-rock.svg)');
}
